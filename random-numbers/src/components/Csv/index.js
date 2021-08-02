import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { CSVLink, CSVDownload } from "react-csv";

const Csv = ({data}) => {
  
  return (
    <>
      <CSVLink filename={"my-file.csv"} key={data} data={data}>Download CSV</CSVLink>
    </>
  )
}

export default Csv;