import cherrypy
import utils


@cherrypy.expose
class WebService(object):

    @cherrypy.tools.accept(media='text/plain')
    def GET(self, data):
        if cherrypy.request.headers['Accept'] is 'application/xml':
            return utils.Parser.tree_builder_xml(data)
        return utils.Parser.tree_builder_json(data)

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

    cherrypy.config.update({ 
        'server.socket_host': '0.0.0.0',
        'server.socket_port': 8080,
    })

    cherrypy.quickstart(WebService(), '/v1/api', conf)
