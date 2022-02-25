import "../style/treemanage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon7_hover from "../assets/main_icons/main_icon7_hover.png";
import go_main from "../assets/goMain.png";
import tree_manage_01 from "../assets/treemanage/07-01.PNG";
import tree_manage_02 from "../assets/treemanage/07-02.PNG";
import tree_manage_03 from "../assets/treemanage/07-03.PNG";
import tree_manage_04 from "../assets/treemanage/07-04.PNG";
import tree_manage_05 from "../assets/treemanage/07-05.PNG";
import tree_manage_06 from "../assets/treemanage/07-06.PNG";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "카테고리 선택하기",
    summary: "원하시는 카테고리를 고르실수 있습니다.",
    imagename: tree_manage_02,
  },
  {
    title: "카테고리 이름 입력",
    summary: "카테고리에 원하시는 이름을 작명하실수 있습니다.",
    imagename: tree_manage_03,
  },
  {
    title: "등록하기",
    summary: "트리에 원하시는 카테고리를 추가하실 수 있습니다",
    imagename: tree_manage_04,
  },
  {
    title: "수정할 데이터 입력",
    summary: "카테고리를 수정하실수 있습니다.",
    imagename: tree_manage_05,
  },
  {
    title: "수정하기",
    summary: "카테고리를 수정하실수 있습니다.",
    imagename: tree_manage_06,
  },
  {
    title: "DB업로드",
    summary: "DB업로드하기",
    imagename: tree_manage_06,
    alertmessage: "DB가 업로드되었습니다",
  },
];

const TreeManage = () => {
  const [mainImage, setMainImage] = useState(tree_manage_01);
  const [mainSummary, setMainSummary] = useState(
    "트리관리 기능은 원하시는 문제지를 카테고리에따라 구분."
  );

  return (
    <div className="treemanage">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="treemanage-image left" src={main_icon7_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="treemanage-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img className="treemanage-image right" src={go_main} />
        </Link>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonData.map((item, index) => {
            return (
              <button
                className="button"
                key={"button" + index}
                onClick={() => {
                  setMainImage(item.imagename);
                  setMainSummary(item.summary);
                  if (item.alertmessage != null) alert(item.alertmessage);
                }}
              >
                <div className="button-value">{item.title}</div>
              </button>
            );
          })}
        </section>
      </aside>
    </div>
  );
};

export default TreeManage;