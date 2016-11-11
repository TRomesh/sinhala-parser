# coding: utf-8
from server import Tagger, Tree
import logging


class Parser:

    def __init__(self):
        self.logger = logging.getLogger('sinhala-parser')
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
        result = tree.depict_tree(words, label)
        result_json = tree.get_json_result(result)
        return result_json
