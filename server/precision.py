# coding: utf-8
from tagger import Tagger
from nltk.chunk.regexp import *


def get_labels(words, label):
    labels = {}
    sentence = []
    for index in xrange(len(words)):
        sentence.append((words[index], label[index]))
        parser = RegexpParser('''
                            NP: {<NMP>?<NMV>*<NMP>}
                            VP: {<KPD> <NP|KRW>*}
                        ''')
        parser.parse(sentence)
    count = 0
    for word in sentence:
        labels.update({count: word[1]})
        count += 1
    return labels

sentence = "ඉතා මිහිරි ගායනයකින් ඔහු අපගේ සිත් සන්සුන් කළේය"
words = sentence.split()
tagger = Tagger()
label = tagger.tag(words)
labels = get_labels(words, label)
for index in labels:
    print labels[index]
