# coding: utf-8
from tagger import Tagger
from tree import Tree


user_input = raw_input("Enter the sentence to be tagged: ")
words = user_input.split()

tagger = Tagger()
label = tagger.tag(words)

tree = Tree()
result = tree.depict_tree(words, label)
result_json = tree.traverse_tree(result)
print result_json
result.draw()
