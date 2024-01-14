"use client";

import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

registerCoreBlocks();

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="123"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401x",
              attributes: {
                label: "푸른용의 해 🐉 갑진년을 맞이하여",
                description: "축복하러 왔어용 🫰",
                attachment: {
                  type: "image",
                  url: "/images/duck.png",
                },
              },
            },
            {
              name: "short-text",
              id: "kd12edg",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "이름이 어떻게 되시나요?",
                attachment: {
                  type: "image",
                  url: "/images/duck.png",
                },
              },
            },
            {
              name: "date",
              id: "dob01",
              attributes: {
                required: true,
                label: "언제 지구에 도착하셨어요, 천사님?",
                description: "예: 1990-01-01",
                attachment: {
                  type: "image",
                  url: "/images/rizz-dog.png",
                },
              },
            },
            {
              name: "multiple-choice",
              id: "gqr1294c",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: false,
                label: "좋아하는 음식은?",
                choices: [
                  {
                    label: "짜장면",
                    value: "짜장면",
                  },
                  {
                    label: "짬뽕",
                    value: "짬뽕",
                  },
                  {
                    label: "떡볶이",
                    value: "떡볶이",
                  },
                  {
                    label: "데인's 🍑",
                    value: "데인's 🍑",
                  },
                ],
              },
            },
          ],
        }}
        onSubmit={(data: any, { completeForm, setIsSubmitting }: any) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
}
