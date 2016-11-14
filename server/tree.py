# coding: utf-8
import nltk
import json

from nltk.chunk.regexp import *
from dicttoxml import dicttoxml


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

    def get_json_result(self, tree):
        json_value = self.__traverse_tree(tree)
        return "{\"SENTENCE\":[" + json_value + "]}"

    def get_xml_result(self, tree):
        json_value = json.loads(self.get_json_result(tree))
        xml_value = dicttoxml(json_value)
        return xml_value

    def __traverse_tree(self, tree):
        json_value = ""
        index = 1
        for subtree in tree:
            index += 1
            if type(subtree) == nltk.tree.Tree:
                if subtree.height() > 2:
                    if index == len(tree) + 1:
                        outer_json = "{\"" + subtree.label() + "\": [" + self.__traverse_tree(subtree) + "]}"
                    else:
                        outer_json = "{\"" + subtree.label() + "\": [" + self.__traverse_tree(subtree) + "]},"
                else:
                    inner_json_value = json.loads(json.dumps(subtree, ensure_ascii=False))
                    inner_json = self.__create_inner_json_subtree(inner_json_value)
                    outer_json = self.__create_outer_json(tree, subtree, index, inner_json)
            else:
                inner_json_value = json.loads(json.dumps(subtree, ensure_ascii=False))
                outer_json = self.__create_inner_json(tree, index, inner_json_value)
            json_value += outer_json
        return json_value

    def __create_inner_json_subtree(self, inner_json_value):
        inner_json = "["
        for index in xrange(len(inner_json_value)):
            if index == len(inner_json_value) - 1:
                inner_json += "{\"" + inner_json_value[index][1] + "\":\"" + inner_json_value[index][0] + "\"}"
            else:
                inner_json += "{\"" + inner_json_value[index][1] + "\":\"" + inner_json_value[index][0] + "\"},"
        inner_json += "]"
        return inner_json

    def __create_inner_json(self, tree, index, inner_json_value):
        if index == len(tree) + 1:
            inner_json = "{\"" + inner_json_value[1] + "\":\"" + inner_json_value[0] + "\"}"
        else:
            inner_json = "{\"" + inner_json_value[1] + "\":\"" + inner_json_value[0] + "\"},"
        return inner_json

    def __create_outer_json(self, tree, subtree, index, inner_json):
        if index == len(tree) + 1:
            outer_json = "{\"" + subtree.label() + "\":" + inner_json + "}"
        else:
            outer_json = "{\"" + subtree.label() + "\":" + inner_json + "},"
        return outer_json
