import cherrypy
import utils


@cherrypy.expose
class WebService(object):

    @cherrypy.tools.accept(media='text/plain')
    def GET(self ,data):
         p = utils.Parser()
         return p.treebuilder(data)

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
        }
    }
    cherrypy.quickstart(WebService(), '/v1/api', conf)
