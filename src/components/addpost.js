import React from 'react'

function addpost() {
    return (
        <div>
            <h4>Add new post</h4>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="title" type="text" class="validate"/>
                            <label for="title" className = 'active'>Title</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea" rows="5"></textarea>
                        <label for="textarea2" className = 'active'>Description</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
      </div>
    )
}

export default addpost
