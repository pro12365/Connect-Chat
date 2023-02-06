import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Home from "../Pages/Home";
import Signup from "../components/Authentication/Signup";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Signup">
                <Signup/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;