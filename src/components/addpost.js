import React from 'react'

function addpost() {
    return (
        <div>
            <h4>Add new post</h4>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate"/>
                            <label htmlFor="title" className = 'active'>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" rows="5"></textarea>
                        <label htmlFor="textarea2" className = 'active'>Description</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
      </div>
    )
}

export default addpost
