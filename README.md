# AI-platform 'Genius'

[nextjs, tailwind, clerk, prisma, stripe, crisp]

[실행 주소](https://ai-platform-project.vercel.app/)

## 환경 설정

- Setup .env file

```.env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

- setup Prisma

```bash
npx prisma db push
```

>메인 페이지

<img width="750" alt="main" src="https://github.com/InhwanCho/AI_Platform_Project/assets/111936229/8dbf80a7-22a8-4f74-9820-3749027dd089">

>로그인 시 페이지

<img width="750" alt="dashboard" src="https://github.com/InhwanCho/AI_Platform_Project/assets/111936229/eb22ec6b-18c3-41ad-aff3-167ea9da62b9">

>반응형 웹디자인(디스플레이 사이즈에 따라)

<img width="750" alt="반응형" src="https://github.com/InhwanCho/AI_Platform_Project/assets/111936229/886f1840-cf8c-4be3-bf73-656af7475ab5">

>멀티턴 챗봇 & 코드 생성 & 이미지 생성 & 비디오 및 음악 생성

<img width="750" alt="chatbot" src="https://github.com/InhwanCho/AI_Platform_Project/assets/111936229/c952c482-c94e-45ca-bf2a-3e9fc8691322">

<img width="750" alt="code" src="https://github.com/InhwanCho/AI_Platform_Project/assets/111936229/8e40ab62-d244-4475-bc01-2367b14dfca7">

<img width="750" alt="img" src="https://github.com/InhwanCho/AI_Platform_Project/assets/111936229/e9a5e1d9-cce5-4b90-9e50-60b4c3dd5af6">
