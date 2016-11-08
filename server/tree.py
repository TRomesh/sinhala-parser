# coding: utf-8
import nltk
import json

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

    def traverse_tree(self, tree):
        value = ""
        index = 1
        for subtree in tree:
            index += 1
            if type(subtree) == nltk.tree.Tree:
                if subtree.height() > 2:
                    if index == len(tree) + 1:
                        outer_json = "{\"" + subtree.label() + "\": [" + self.traverse_tree(subtree) + "]}"
                    else:
                        outer_json = "{\"" + subtree.label() + "\": [" + self.traverse_tree(subtree) + "]},"
                else:
                    inner_json_value = json.loads(json.dumps(subtree, ensure_ascii=False))
                    inner_json = self.create_inner_json_subtree(inner_json_value)
                    outer_json = self.create_outer_json(tree, subtree, index, inner_json)
            else:
                inner_json_value = json.loads(json.dumps(subtree, ensure_ascii=False))
                outer_json = self.create_inner_json(tree, index, inner_json_value)
            value += outer_json

        return "{\"S\":[" + value + "]}"

    def create_inner_json_subtree(self, inner_json_value):
        inner_json = "["
        for index in xrange(len(inner_json_value)):
            if index == len(inner_json_value) - 1:
                inner_json += "{\"" + inner_json_value[index][1] + "\":\"" + inner_json_value[index][0] + "\"}"
            else:
                inner_json += "{\"" + inner_json_value[index][1] + "\":\"" + inner_json_value[index][0] + "\"},"
        inner_json += "]"
        return inner_json

    def create_inner_json(self, tree, index, inner_json_value):
        if index == len(tree) + 1:
            inner_json = "{\"" + inner_json_value[1] + "\":\"" + inner_json_value[0] + "\"}"
        else:
            inner_json = "{\"" + inner_json_value[1] + "\":\"" + inner_json_value[0] + "\"},"
        return inner_json

    def create_outer_json(self, tree, subtree, index, inner_json):
        if index == len(tree) + 1:
            outer_json = "{\"" + subtree.label() + "\":" + inner_json + "}"
        else:
            outer_json = "{\"" + subtree.label() + "\":" + inner_json + "},"
        return outer_json
