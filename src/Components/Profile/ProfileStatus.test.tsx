import {create} from "react-test-renderer";
import React from 'react';
import {ProfileStatus} from "./ProfileStatus";



describe("ProfileStatus component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="social network"
                                                updateUserStatus={() => {
                                                }}/>);
        const instance:any = component.getInstance();
        expect(instance.state.status).toBe("social network");
    });

    test("after creation 'span' should be displayed", async () => {
        const component = create(<ProfileStatus status="social network" updateUserStatus={() => {
        }}/>);
        const root = component.root;
        let span: { [propName: string]: any } = await root.findByType('span');
        expect(span.length).not.toBe(1);
    });

    test("after creation 'span' should be displayed with correct status", async () => {
        const component = create(<ProfileStatus status="social network" updateUserStatus={() => {
        }}/>);
        const root = component.root;
        let span: { [propName: string]: any } = await root.findByType('span');
        expect(span.length).not.toBeNull();
    });

    test("after creation 'span' should contains correct status", async () => {
        const component = create(<ProfileStatus status="social network" updateUserStatus={() => {
        }}/>);
        const root = component.root;
        let span = await root.findByType('span');
        expect(span.children[0]).toBe('social network');
    });

    test('input should be displayed in editMode instead of span', async () => {
        const component = create(<ProfileStatus status="social network" updateUserStatus={() => {
        }}/>);
        const root = component.root;
        let span = await root.findByType('span');
        span.props.onDoubleClick();
        let input = await root.findByType('input');
        expect(input.props.value).toBe('social network');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="social network" updateUserStatus={mockCallback}/>);
        const instance:any = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})