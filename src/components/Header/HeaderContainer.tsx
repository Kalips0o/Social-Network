import React from 'react';
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import defaultAvatar from "../../assets/img/UserPhoto/user.webp";

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo:state.profilePage.profile?.photos
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {logout})(HeaderContainer);
