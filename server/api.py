import os
import cherrypy
import utils

from cherrypy.lib.static import serve_file


# static directory
STATIC_DIR = os.path.dirname(os.path.abspath('public/dist/app'))
# Root class to handle root routes
@cherrypy.expose
class Root(object):
    def index(self):
        cherrypy.InternalRedirect("v1")
# WebService class to handle requests to SP-API endpoints
@cherrypy.expose
class WebService(object):

    def GET(self, data):
        if cherrypy.request.headers['Accept'] == 'application/xml':
            parser = utils.Parser()
            return parser.tree_builder_xml(data)
        parser = utils.Parser()
        return parser.tree_builder_json(data)

    def POST(self, data):
        return 'using v1/api/POST'

    def PUT(self, data):
        return 'using v1/api/PUT'

    def DELETE(self):
        return 'using v1/api/DELETE'


if __name__ == '__main__':
    conf = {
        '/': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
            'tools.sessions.on': True,
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
            'tools.staticdir.on' : True,
            'tools.staticdir.dir' : STATIC_DIR,
            'tools.staticdir.index' : 'index.html'
        }
    }

    if not os.path.exists(os.path.abspath('server/logs')):
        os.makedirs(os.path.abspath('server/logs'))
    cherrypy.config.update({
        'server.socket_host': '0.0.0.0',
        'server.socket_port': 8080,
        'log.access_file': 'server/logs/http_access.log'
    })

    root = Root()
    root.v1 = Root()
    root.v1.api = WebService()
    cherrypy.quickstart(root, '/', conf)
