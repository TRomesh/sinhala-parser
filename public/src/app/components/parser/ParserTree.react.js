import React, {Component} from 'react';
import go from 'gojs';
const goObj = go.GraphObject.make;

export default class GoJs extends Component {

  constructor (props) {
    super (props);
    this.renderCanvas = this.renderCanvas.bind (this);
    this.state = {myModel: null, myDiagram: null}
  }

  renderCanvas () {

    function FlatTreeLayout () {
       go.TreeLayout.call(this);  // call base constructor
    }

    go.Diagram.inherit(FlatTreeLayout, go.TreeLayout);

    // This assumes the TreeLayout.angle is 90 -- growing downward
    /** @override */
    FlatTreeLayout.prototype.commitLayout = function () {

      // call base method first
      go.TreeLayout.prototype.commitLayout.call(this);

      // find maximum Y position of all Nodes
      var y = -Infinity;
      this.network.vertexes.each(function(v) {
        y = Math.max(y, v.node.position.y);
      });

      // move down all leaf nodes to that Y position, but keeping their X position
      this.network.vertexes.each(function(v) {
        var node = v.node;
        if (node.isTreeLeaf) {
          node.position = new go.Point(node.position.x, y);
        }
      });
    };

    let model = goObj (go.TreeModel);
    let diagram = goObj (go.Diagram, this.refs.goJsDiv,          {
          allowCopy: false,
          allowDelete: false,
          allowMove: false,
          initialContentAlignment: go.Spot.Center,
          initialAutoScale: go.Diagram.Uniform,
          layout:
            goObj(FlatTreeLayout,  // custom Layout, defined below
              { angle: 90,
                compaction: go.TreeLayout.CompactionNone }),
                "undoManager.isEnabled": true
              });

          diagram.nodeTemplate = goObj(go.Node, "Vertical",
            { selectionObjectName: "BODY" },
                goObj ( go.Panel, "Auto", { name: "BODY" },
                  goObj ( go.Shape, "RoundedRectangle",
                            new go.Binding("fill"),
                            new go.Binding("stroke")),
                        goObj(go.TextBlock,
                          { font: "bold 14pt Arial, sans-serif", margin: new go.Margin(4, 2, 2, 2) },
                            new go.Binding("text"))
                      ),
                goObj ( go.Panel,  // this is underneath the "BODY"
                          { height: 15 },  // always this height, even if the TreeExpanderButton is not visible
                        goObj("TreeExpanderButton")
                      )
          );

          diagram.linkTemplate = goObj(go.Link,goObj(go.Shape, { strokeWidth: 1.5 }));

          this.setState({myModel: model, myDiagram: diagram},
            () => {
              model.nodeDataArray = this.props.data;
              diagram.model = model;
              this.setState({myModel: model, myDiagram: diagram});
            }
          );
    }

    componentDidMount () {
      this.renderCanvas ();
    }

    componentWillUpdate (prevProps) {
      if (this.props.data !== prevProps.data) {
        const model = this.state.myModel;
        const diagram = this.state.myDiagram;
        model.nodeDataArray = this.props.data;
        diagram.model = model;
        this.setState({myModel: model, myDiagram: diagram});
      }
    }

    render () {
      return <div ref="goJsDiv" style={{'width': '100%', 'height': '400px', 'backgroundColor': '#FFFFFF'}}></div>;
    }
}

GoJs.propTypes = { data: React.PropTypes.array.isRequired };
GoJs.defaultProps = { data: [] };
