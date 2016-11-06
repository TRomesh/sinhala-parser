import random
import string
import os

import cherrypy
from cherrypy.lib.httputil import parse_query_string
#from server import utils

class Root(object):
    @cherrypy.expose
    def index(self):
        return file('../public/dist/index.html')

@cherrypy.expose
class WebService(object):

    @cherrypy.tools.accept(media='text/plain')
    def GET(self, q):
        # p = utils.Parser();
        # p.treebuilder("sentence to be tagged as a query parameter 'data' ")
        #TODO: after integrating back-end branch make the call to parser
        query = parse_query_string(cherrypy.request.query_string)
        print query
        return 'using v1/api/GET '


if __name__ == '__main__':
    current_dir = os.getcwd()

    root_conf = {
        '/static': {
            'tools.sessions.on': True,
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "dist",
            'tools.staticdir.root': current_dir + "/../public",
            'tools.staticdir.index': "index.html"
        },
    }

    web_service_conf = {
        '/': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
            'tools.sessions.on': True,
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
        }
    }

    cherrypy.tree.mount(Root(), '/', root_conf)
    cherrypy.tree.mount(WebService(), '/api/v1', web_service_conf)

    cherrypy.engine.start()
    cherrypy.engine.block()
