import React from "react";
import { Container } from "semantic-ui-react";
import styled from "@emotion/styled";
import queryString from "query-string";
import EventCardGroup from "../containers/EventCardGroup";

const Layout = styled(Container)({
  minHeight: "100vh"
});

const ContentContainer = styled(Container)({
  marginTop: "2em !important",
  marginBottom: "5em !important"
});

const Search = ({ location }) => {
  const { q, ids, from, to, sortBy, sortOrder } = queryString.parse(location.search);
  const committeeFilterValue = {};
  if(ids) {
    ids.split(',').forEach(id => committeeFilterValue[id] = true);
  }
  return (
    <Layout>
      <ContentContainer>
        <EventCardGroup
          query={q}
          committeeFilterValue={committeeFilterValue}
          start={from || ''}
          end={to || ''}
          sortBy={sortBy || ''}
          sortOrder={sortOrder || ''} />
      </ContentContainer>
    </Layout>
  );
};

export default Search;
