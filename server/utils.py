# coding: utf-8
from tagger import Tagger
from tree import Tree


class Parser:

    @staticmethod
    def tree_builder(data):
        words = data.split()

        tagger = Tagger()
        label = tagger.tag(words)

        tree = Tree()
        result = tree.depict_tree(words, label)
        result_json = tree.get_json_result(result)
        return result_json
