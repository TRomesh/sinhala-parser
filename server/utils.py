# coding: utf-8
from tagger import Tagger
from tree import Tree


class Parser:
    def tree_builder(self, data):
        words = data.split()

        tagger = Tagger()
        label = tagger.tag(words)

        tree = Tree()
        return tree, tree.depict_tree(words, label)

    def tree_builder_json(self, data):
        tree, result = Parser.tree_builder(data)
        result_json = tree.get_json_result(result)
        return result_json

    def tree_builder_xml(self, data):
        tree, result = Parser.tree_builder(data)
        result_xml = tree.get_xml_result(result)
        return result_xml
