export const topicColor = (article) => {
  let id = "";
  if (article.topic === "cooking") {
    id = "article-topic-cooking";
  } else if (article.topic === "football") {
    id = "article-topic-football";
  } else if (article.topic === "coding") {
    id = "article-topic-coding";
  }

  return id;
};

export const topicCapitalise = (article) => {
  let topicArray = [];
  let strArray = article.topic.split("");
  let shift = strArray.shift();
  topicArray.push(shift.toUpperCase());
  strArray.forEach((char) => {
    topicArray.push(char);
  });
  return topicArray;
};

export const topicCapitalised = (topic) => {
  let topicArray = [];
  let strArray = topic.split("");
  let shift = strArray.shift();
  topicArray.push(shift.toUpperCase());
  strArray.forEach((char) => {
    topicArray.push(char);
  });
  return topicArray;
};

export const topicSlugCapitalised = (topic) => {
  let topicArray = [];
  let strArray = topic.slug.split("");
  let shift = strArray.shift();
  topicArray.push(shift.toUpperCase());
  strArray.forEach((char) => {
    topicArray.push(char);
  });
  return topicArray.join("");
};

export const timeConfig = (article) => {
  let timeArr = article.created_at.split("");
  timeArr.splice(10, 0, " ");
  timeArr.splice(11, 1, " ");
  timeArr.splice(10, 0, "");
  timeArr.splice(10, 1, " ");

  let timeSplice = timeArr.slice(0, 18);
  let time = timeSplice.join("");

  return time;
};

export const bodyConfig = (article) => {
  let bodySplit = article.body.split(" ");
  let bodySlice = bodySplit.slice(0, 29);
  let body = bodySlice.join(" ") + "...";

  return body;
};
