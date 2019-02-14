import React from 'react';
import renderer from 'react-test-renderer';
import {LoginPage} from "../Pages/LoginPage";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginViewModel} from "../ViewModel/LoginViewModel";

test('Login validation', () => {
    const component = renderer.create(
        <LoginPage/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

configure({adapter: new Adapter()});
test('Check login forms', () => {
    const login = new LoginViewModel();
    expect(login.passwordEnabled).toEqual(false);

    login.loginChange('111');
    expect(login.passwordEnabled).toEqual(true);
});

