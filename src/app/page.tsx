"use client";

import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { useRouter } from "next/navigation";

registerCoreBlocks();

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-full w-full">
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "welcome",
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
              id: "name",
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
              id: "date",
              attributes: {
                required: true,
                label: "언제 지구에 도착하셨어요, 천사님?",
                format: "YYYYMMDD",
                separator: "-",
                description: "예: 1999-11-15",
                attachment: {
                  type: "image",
                  url: "/images/rizz-dog.png",
                },
              },
            },
            {
              name: "multiple-choice",
              id: "food",
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
                ],
              },
            },
          ],
        }}
        onSubmit={(data: any) => {
          setTimeout(() => {
            // 만나이 계산
            const now = new Date();
            const birth = new Date(data.answers.date.value);
            let age = now.getFullYear() - birth.getFullYear();
            const m = now.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
              age--;
            }
            router.push(`/result/${age}`);
          }, 2000);
        }}
      />
    </div>
  );
}
