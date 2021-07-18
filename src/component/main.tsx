import React, { useRef } from "react";
import { of } from "rxjs";
import { useObservable } from "rxjs-hooks";
import { useModal } from "../hooks/useModal";
import { Field, FieldType } from "./form/field";
import { Form } from "./form/form";
import "./index.css";
import { Modal } from "./modal/modal";

export const Main: React.FC = () => {
  const { visible, toggleModalVisible } = useModal();
  const formModel = useObservable(() => of({}));
  const formRef = useRef();
  return (
    <div className="main">
      <h2>A better way to enjoy every day {JSON.stringify(formModel)}</h2>
      <span>Be the first to know when we launch</span>
      <button
        onClick={() => {
          toggleModalVisible();
        }}
      >
        Request an invite
      </button>
      <Modal title="Requst" visible={visible}>
        <Form>
          <Field
            formModel={formModel}
            name="name"
            type={FieldType.input}
            placeholder="blablabla"
          />
          <button type="submit">submit</button>
        </Form>
      </Modal>
    </div>
  );
};
