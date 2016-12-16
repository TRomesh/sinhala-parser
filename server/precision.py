# coding: utf-8
from tagger import Tagger
from nltk.chunk.regexp import *
import difflib

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

sentence = "ඉතා NMV මිහිරි KRW ගායනයකින් KPD ඔහු NMP අපගේ NMP සිත් NMP සන්සුන් KPD කළේය KPD"
words = sentence.split()

#get tagged result from the parser
tagger = Tagger()
label = tagger.tag(words[0::2])
labels = get_labels(words[0::2], label)

#calculate the matching ratio
ratio = difflib.SequenceMatcher(None,words[1::2], labels.values()).ratio()

#debug
print(ratio * 100)
