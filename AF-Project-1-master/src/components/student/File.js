import React,{Component} from 'react';
export default class File extends Component{
    render() {
        return(
            <div>
                <form action="/uploadfile" encType="multipart/form-data" method="POST">
                    <input type="file" name="myFile"/>
                    <input type="submit" value="Upload a file"/>
                </form>
            </div>

        )
    }

}