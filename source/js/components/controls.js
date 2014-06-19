/** @jsx React.DOM */

define([
    'react',
    'utils',
    'constants',
    'skyway',
    'router'
], function (
    React,
    Utils,
    Constants,
    Skyway,
    Router
) {

    var Controls = React.createClass({displayName: 'Controls',
        handleStartRoom: function(e) {
            var room = Utils.uuid();
            Router.setRoute('/' + room);
        },
        handleLeaveRoom: function(e) {
            Skyway.leaveRoom();
            Router.setRoute('/');
        },
        render: function() {
            var res = [];

            if(this.props.state.state === Constants.AppState.FOYER) {
                res.push(
                    React.DOM.button( {onClick:this.handleStartRoom}, 
                        "Start"
                    )
                    );
            }
            else if(this.props.state.state === Constants.AppState.IN_ROOM) {
                res.push(
                    React.DOM.button( {onClick:this.handleLeaveRoom}, 
                        "Leave"
                    )
                    );

                res.push(
                    React.DOM.div(null, "Status: ", this.props.state.room.status)
                    );
            }

            return (
                React.DOM.section( {id:"controls"}, 
                    React.DOM.div(null, 
                        res
                    )
                )
                )
        }
    });

    return Controls;
});