# coding: utf-8
import os
import logging

from tagger import Tagger
from tree import Tree


class Parser:

    def __init__(self):
        self.logger = logging.getLogger('sinhala-parser')
        if not os.path.exists('logs'):
            os.makedirs('logs')
        logger_handler = logging.FileHandler('logs/sinhala-parser.log')
        logger_format = '%(asctime)-s - %(levelname)s : %(message)s'
        logger_handler.setFormatter(logging.Formatter(logger_format))
        logger_handler.setLevel(logging.DEBUG)
        self.logger.addHandler(logger_handler)
        self.logger.setLevel(logging.DEBUG)
        self.logger.propagate = False
        self.logger.debug('Util Parser initialized.')

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
