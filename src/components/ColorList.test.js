import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const colors = [
    {
        color: 'aliceblue',
        code:{hex:'#f0f8ff'},
        id: 1
    },
    {
        color: 'limegreen',
        code:{hex:'#99ddbc'},
        id: 2
    }
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />);
    const colors = screen.getByText('colors');
    expect(colors).toBeInTheDocument();
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={colors} />);
    const color = screen.getAllByTestId('color');
    expect(color).toHaveLength(2);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={colors} editing={true} />);
    let editForm = screen.queryByTestId('editMenu');
    expect(editForm).toBeInTheDocument();

    rerender(<ColorList colors={colors} editing={false} />);
    editForm = screen.queryByTestId('editMenu');
    expect(editForm).not.toBeInTheDocument();
});
