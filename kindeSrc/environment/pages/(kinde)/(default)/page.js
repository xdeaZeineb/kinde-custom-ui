"use server";

import { Widget } from "../../../../components/widget";
import { DefaultLayout } from "../../../../layouts/default";
import { Root } from "../../../../root";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const DefaultPage = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        <Widget
          heading={context.widget.content.heading}
          description={context.widget.content.description}
        />
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event) {
  const page = await DefaultPage(event);
  return renderToString(page);
}
