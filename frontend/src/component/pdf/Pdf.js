import React from "react";
import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import List, { Item } from "./List";

const Pdf = ({
  id,
  title,
  topic,
  writer,
  parties,
  date,
  meeting_date,
  summary,
  keyword,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.title}>회의 제목: {title} </Text>
        </View>
        <View style={styles.subsection}>
          <Text>회의 안건: {topic}</Text>
        </View>
        <View style={styles.subsection}>
          <Text style={styles.subtitle}>회의 날짜: {meeting_date}</Text>
        </View>
        <View style={styles.subsection}>
          <Text>작성자: {writer}</Text>
          <Text>작성일: {date}</Text>
          <Text>참석자: {parties}</Text>
        </View>
        <View style={styles.subsection}>
          <View>
            <Text style={styles.stitle}>회의 요약</Text>
          </View>
          <List>
            {summary.map((s, i) => (
              <Item key={i} style={(styles.detailContainer, styles.inner)}>
                {s}
              </Item>
            ))}
          </List>
        </View>
        <View style={styles.subsection}>
          <View>
            <Text style={styles.stitle}>회의 키워드</Text>
          </View>
          <Text style={styles.inner}>
            {keyword[0]}, {keyword[1]}, {keyword[2]}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Nanum Gothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Nanum Gothic",
  },
  section: {
    margin: 0,
    padding: 0,
  },
  subsection: {
    margin: 5,
    padding: 5,
  },

  stitle: {
    marginBottom: 2,
  },
  inner: {
    textIndent: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontsize: 16,
  },
  detailContainer: {
    flexDirection: "row",
  },
});

export default Pdf;
