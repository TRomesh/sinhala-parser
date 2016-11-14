# coding: utf-8
import sys
import os
import time
import logging

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn import svm

class Tagger:
    def __init__(self):
        self.logger = logging.getLogger('sinhala-parser')
        self.logger.debug('Tagger object initialized')

    def tag(self, user_input):
        # classes
        classes = ['KPD', 'KRW', 'NIP', 'NMP', 'NMV', 'UPS', 'MK', 'SAM']
        # Read the data
        train_data = []
        train_labels = []
        test_data = []
        stop_labels = []
        stop_data = []
        data = []

        f = file(os.path.dirname(os.path.abspath(__file__)) + "/data/train.txt").read()
        for word in f.split():
            # append each word
            data.append(word)

        for i in xrange(len(data)):
            if (i % 2) == 0:
                train_data.append(data[i])
            else:
                train_labels.append(data[i])


        # create vector from TFIDF
        vectorizer = TfidfVectorizer(min_df=0,
                                 max_df = 0.9,
                                 sublinear_tf=True,
                                 stop_words=stop_data,
                                 strip_accents='unicode',
                                 analyzer='word',
                                 use_idf=False,decode_error='ignore')

        train_vectors = vectorizer.fit_transform(train_data)
        # print train_vectors
        # print type(train_vectors)
        test_vectors = vectorizer.transform(user_input)
        # log test_vectors
        self.logger.debug('Test vectors: %s', test_vectors)
        # Perform classification with SVM, kernel=rbf
        classifier_rbf = svm.LinearSVC()
        t0 = time.time()
        classifier_rbf.fit(train_vectors, train_labels)
        t1 = time.time()
        prediction_rbf = classifier_rbf.predict(test_vectors)
        t2 = time.time()
        time_rbf_train = t1-t0
        time_rbf_predict = t2-t1
        # log prediction from LinearSVC
        self.logger.debug('Prediction LinearSVC: %s', prediction_rbf)
        return prediction_rbf
