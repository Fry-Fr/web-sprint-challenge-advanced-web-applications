import React from 'react';
import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={{color:'',code:{hex:''},id:1}} />);

    const colorComponent = screen.getByTestId('color');
    expect(colorComponent).toBeInTheDocument();
});
  
test("Renders the color passed into component", () => {
    render(<Color color={{color:'aliceblue',code:{hex:'#f0f8ff'},id:1}} />);

    const color = screen.getByTestId('color');

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent('aliceblue');
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const mockDelete = jest.fn(()=>{
        return "Delete fn called."
    })
    const mockEdit = jest.fn(()=>{
        return "Edit fn called."
    })
    render(<Color color={{color:'aliceblue',code:{hex:'#f0f8ff'},id:1}} deleteColor={mockDelete} toggleEdit={mockEdit} />);
 
    const x = screen.getByText('x');

    expect(mockDelete.mock.calls).toHaveLength(0);
    expect(mockEdit.mock.calls).toHaveLength(0);

    userEvent.click(x);

    expect(mockDelete.mock.calls).toHaveLength(1);
    expect(mockEdit.mock.calls).toHaveLength(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const mockSetEditColor = jest.fn(()=>{
        return "set fn called."
    })
    const mockToggleEdit = jest.fn(()=>{
        return "toggle fn called."
    })
    render(<Color color={{color:'aliceblue',code:{hex:'#f0f8ff'},id:1}} setEditColor={mockSetEditColor} toggleEdit={mockToggleEdit} />);

    const colorDiv = screen.getByText('aliceblue');

    expect(mockSetEditColor.mock.calls).toHaveLength(0);
    expect(mockToggleEdit.mock.calls).toHaveLength(0);
    
    userEvent.click(colorDiv);

    expect(mockSetEditColor.mock.calls).toHaveLength(1);
    expect(mockToggleEdit.mock.calls).toHaveLength(1);
});