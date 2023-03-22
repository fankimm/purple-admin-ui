import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import { Button, Card, Divider, Table } from "antd";
import { LucideTrash2 } from "lucide-react";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const IndexPage: IDefaultLayoutPage = () => {
  // const { data, error } = useDashboard();
  const data = [
    {
      no: "등수",
      date: "",
      강한규: "5등🤭",
      김별님: "10등🥺🥺",
      김수연: "3등😏",
      김지환: "1등🥰💯",
      송지윤: "6등😝",
      신수경: "2등🙄",
      예영경: "8등😇",
      이시은: "4등😚",
      최정민: "7등🤗",
      홍동수: "9등🥺",
    },
    {
      no: "1",
      date: "2023-03-08(수)",
      강한규: -4,
      김별님: -5,
      김수연: "",
      김지환: "",
      송지윤: -6,
      신수경: -2,
      예영경: 0,
      이시은: -3,
      최정민: -20,
      홍동수: -5,
    },
    {
      no: "2",
      date: "2023-03-10(금)",
      강한규: -4,
      김별님: -5,
      김수연: "",
      김지환: "",
      송지윤: -6,
      신수경: -2,
      예영경: 0,
      이시은: -3,
      최정민: -20,
      홍동수: -5,
    },
    {
      no: "3",
      date: "2023-03-11(금)",
      강한규: -4,
      김별님: -5,
      김수연: "",
      김지환: "",
      송지윤: -6,
      신수경: -2,
      예영경: 0,
      이시은: -3,
      최정민: -20,
      홍동수: -5,
    },
    {
      no: "4",
      date: "2023-03-15(금)",
      강한규: -4,
      김별님: -5,
      김수연: "",
      김지환: "",
      송지윤: -6,
      신수경: -2,
      예영경: 0,
      이시은: -3,
      최정민: -20,
      홍동수: -5,
    },
  ];
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "날짜",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "강한규",
      dataIndex: "강한규",
      key: "강한규",
    },
    {
      title: "김별님",
      dataIndex: "김별님",
      key: "김별님",
    },
    {
      title: "김수연",
      dataIndex: "김수연",
      key: "김수연",
    },
    {
      title: "김지환",
      dataIndex: "김지환",
      key: "김지환",
    },
    {
      title: "송지윤",
      dataIndex: "송지윤",
      key: "송지윤",
    },
    {
      title: "신수경",
      dataIndex: "신수경",
      key: "신수경",
    },
    {
      title: "예영경",
      dataIndex: "예영경",
      key: "예영경",
    },
    {
      title: "이시은",
      dataIndex: "이시은",
      key: "이시은",
    },
    {
      title: "최정민",
      dataIndex: "최정민",
      key: "최정민",
    },
    {
      title: "홍동수",
      dataIndex: "홍동수",
      key: "홍동수",
    },
    {
      title: "",
      dataIndex: "",
      key: "action",
      render: (_val, record) => {
        if (record && record.no !== "등수") {
          return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button>수정</Button>
              <Button>
                <LucideTrash2></LucideTrash2>
              </Button>
            </div>
          );
        }
        return null;
      },
    },
  ];
  return (
    <>
      {/* <h2 className="title">👋 {session.user.name || "관리자"}님 안녕하세요!</h2> */}
      <div className="my-5"></div>
      <Card extra={<Button type="primary">점수추가</Button>}>
        <Table
          pagination={false}
          dataSource={data}
          columns={columns}
          size="small"
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>합계</Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                {columns.slice(0, -1).map((col, idx) => {
                  if (idx !== 0 && idx !== 1) {
                    const key = `summray_row_key${idx}`;
                    return (
                      <Table.Summary.Cell index={idx + 2} key={key}>
                        {data.slice(1).reduce((a, b) => a + parseInt(b[col.title], 10), 0)}
                      </Table.Summary.Cell>
                    );
                  }
                  return null;
                })}
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
      </Card>
      <Divider />
    </>
  );
};

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;

export default IndexPage;
