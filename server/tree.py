# coding: utf-8
from nltk.chunk.regexp import *


class Tree:

    def __init__(self):
        self.sentence = []

    def depict_tree(self, words, label):
        result = None
        for index in xrange(len(words)):
            self.sentence.append((words[index], label[index]))
            parser = RegexpParser('''
                        NP: {<NMP>?<NMV>*<NMP>}
                        VP: {<KPD> <NP|KRW>*}
                    ''')
            result = parser.parse(self.sentence)
        return result
