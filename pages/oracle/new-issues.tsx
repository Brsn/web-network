import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { IIssue } from "../../components/issue-list-item";
import ListIssues from "../../components/list-issues";
import GithubMicroService from "../../services/github-microservice";
import { setLoadingAttributes } from "../../providers/loading-provider";
import { isEmpty } from "lodash";
import Oracle from "../../components/oracle";
import { mockNewIssues } from "../../helpers/mockdata/mockIssues";

export default function Newissues() {
  const [issues, setIssues] = useState<IIssue[]>(mockNewIssues);

  useEffect(() => {
    //getIssues();
  }, []);

  const getIssues = async () => {
    if (isEmpty(issues)) {
      setLoadingAttributes(true);
    }
    await GithubMicroService.getIssuesState({
      filterState: "draft",
    })
      .then((issues) => {
        setIssues(issues);
      })
      .catch((error) => console.log("Error", error))
      .finally(() => setLoadingAttributes(false));
  };

  return (
    <Oracle buttonPrimaryActive={true}>
      <ListIssues listIssues={issues} />
    </Oracle>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};