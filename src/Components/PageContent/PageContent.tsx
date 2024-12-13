import {
  ContentBodyStyledComponent,
  ContentHeaderStyledComponent,
} from "../../GlobalStyledComponents/GlobalStyled.styles";
import { PageContentGridStyledComponent } from "./PageContent.styles";
import "./PageContent.scss";

const PageContent = () => {
  return (
    <PageContentGridStyledComponent container>
        <ContentHeaderStyledComponent>
          APEX_AM
        </ContentHeaderStyledComponent>
      <ContentBodyStyledComponent>
        An IT Service company
      </ContentBodyStyledComponent>
    </PageContentGridStyledComponent>
  );
};

export default PageContent;
