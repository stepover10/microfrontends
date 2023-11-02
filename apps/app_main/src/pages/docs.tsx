import dynamic from "next/dynamic";

const RemoteNextPage = dynamic(() => import("app_docs/index"), {
  ssr: false
});

const Page_Docs = () => {
  return (
    <div>
      DOCS 앱
      <RemoteNextPage />
    </div>
  )
}

export default Page_Docs;