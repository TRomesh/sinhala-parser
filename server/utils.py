# coding: utf-8
from server import Tagger, Tree


class Parser:
    def treebuilder(self, data):
        words = data.split()

        tagger = Tagger()
        label = tagger.tag(words)

        tree = Tree()
        result = tree.depict_tree(words, label)
        result_json = tree.traverse_tree(result)
        return result_json
