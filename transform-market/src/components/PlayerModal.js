import React from "react";

class PlayerModal extends React.Component {
    state = {  } 

    cancelBtn = () =>{
        this.props.closeModal();
    }

    render() { 
        return (
            <div className="card">
                <div className="card-header">Add Player Modal</div>
                <div className="card-body">Enter data...</div>
                <div className="card-footer">
                    <button className="btn btn-warning m-1" onClick={this.cancelBtn}>Cancel</button>
                    <button className="btn btn-success m-1">Save changes</button>
                </div>
            </div>
        );
    }
}
 
export default PlayerModal;