import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
        
        // console.log(this.props.selectedDish['comments']);
    }
    

    componentDidMount(){
        console.log(this.props.selectedDish);
    }

    renderDish(dish){
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

    renderComments(dishComments){

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
                            <li>--{comm.author} {comm.date}</li>
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

    render(){
        
        let comm;
        const currentDish = this.props.selectedDish;
        
        if (currentDish != null){
            comm = currentDish.comments;
        return(
            <div className = "row">
                <div className = "col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className = "col-12 col-md-5 m-1">
                    {this.renderComments(comm)}
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
}

export default DishDetail;