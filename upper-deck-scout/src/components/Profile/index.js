import React from 'react';
import NamePlate from '../NamePlate';
import InfoList from '../InfoList';

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            age: "",
            favoriteFood: "",
            showButton: true,
        };
    }
    render() {
        return(
            <div>
                <NamePlate name={this.state.name} />
                <InfoList 
                    info={[
                        { label: "Age", value: this.state.age },
                        { label: "Favorite Food", value: this.state.favoriteFood },
                    ]}
                />
                {/* button element, function=onClick, set state (name/age/food) as ___ */}
                {this.state.showButton && (
                    <button
                        onClick={() => 
                            this.setState({
                                name: "Jared",
                                age: "37",
                                favoriteFood: "Mango Sticky Rice",
                                showButton: false,
                            })
                        }
                    >
                        Set Profile Info
                    </button>
                )}
            </div>
        );
    }
}

export default Profile;