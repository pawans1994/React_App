import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';



function RenderDish({dish}){
    if (dish != null){
        return (
            <Card>
                <CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
                <CardBody>
                    <CardTitle tag = "h5">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

function RenderComments({dishComments}){

    if (!dishComments || !dishComments.length){
        return(
            <div></div>
        )
    }

    else{
        
        const commentsView = dishComments.map((comm)=>{
        
            return(
                <div key = {comm.id}>
                    <List type ="unstyled">
                        <li>{comm.comment}</li>
                        <br/>
                        <li>--{comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
                    </List>
                </div>
            );
        });
        return(
        <div>
            <h4>Comments</h4>
            {commentsView}
        </div>
        )
    }

    
}

        
const DishDetail = (props) =>{
    let comm;
    const currentDish = props.selectedDish;
    
    if (currentDish != null){
        comm = currentDish.comments;
    return(
        <div className = "container">
        <div className = "row">
            <div className = "col-12 col-md-5 m-1">
                <RenderDish dish = {currentDish} />
            </div>
            <div className = "col-12 col-md-5 m-1">
                <RenderComments dishComments = {comm} />
            </div>
        </div>
        </div>           
    )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default DishDetail;