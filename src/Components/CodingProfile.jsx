import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function CodingProfile() {
      const [maxRank,setmaxRank]=useState("");
      const [maxRating,setmaxReting]=useState(0);
    
    useEffect(() => {
  //     const codeforcesData = () => {
  //       fetch(
  //         "https://codeforces.com/api/user.status?handle=shriganesh83&from=1&count=1000"
  //       )
  //         .then((data) => {
  //           const res = data.json();
  //           return res;
  //         })
  //         .then((res) => {
  //           const freq = {};
  //           const resultList = res.result;
  //           for (var i of resultList) {
  //             const list = i.problem.tags;
  //             for (var tag of list) {
  //               if (freq[tag]) {
  //                 freq[tag]++;
  //               } else {
  //                 freq[tag] = 1;
  //               }
  //             }
  //           }
  //           const tags = Object.keys(freq);
  //           const count = [];
  //           tags.forEach((key, index) => {
  //             count.push(`${freq[key]}`);
  //           });
  //           console.log(tags);
  //           console.log(count);
  //           setData({
  //             datasets: [
  //               {
  //                 data: count,
  //                 backgroundColor: [
  //                   "red",
  //                   "blue",
  //                   "yellow",
  //                   "green",
  //                   "grey",
  //                   "purple",
  //                   "orange",
  //                   "pink",
  //                   "cyan",
  //                   "gold",
  //                   "greenYellow",
  //                   "LawnGreen",
  //                   "Indigo",
  //                   "Teal",
  //                   "magenta",
  //                   "darkSeagreen",
  //                   "deeppink",
  //                   "lightpink",
  //                   "magenta",
  //                   "olive",
  //                   "orchid",
  //                 ],
  //               },
  //             ],
  //             labels: tags,
  //           });
  //         });
  //     };
      const UserData = () => {

        fetch("https://codeforces.com/api/user.info?handles=shriganesh83")
          .then((data) => {
            const res = data.json();
            return res;
          })
          .then((res) => {
            console.log(res.result);
            console.log(res.result[0].rank);
            console.log(res.result[0].rating);
            setmaxRank(res.result[0].rank);
            setmaxReting(res.result[0].rating);
          });
      };
      // codeforcesData();
      UserData();
    }, []);
  const res = useLoaderData();
  const freq = {};
  const resultList = res.result;
  for (var i of resultList) {
    const list = i.problem.tags;
    for (var tag of list) {
      if (freq[tag]) {
        freq[tag]++;
      } else {
        freq[tag] = 1;
      }
    }
  }
  const tags = Object.keys(freq);
  const count = [];
  tags.forEach((key, index) => {
    count.push(`${freq[key]}`);
  });

  const data = {
    datasets: [
      {
        data: count,
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "green",
          "grey",
          "purple",
          "orange",
          "pink",
          "cyan",
          "gold",
          "greenYellow",
          "LawnGreen",
          "Indigo",
          "Teal",
          "magenta",
          "darkSeagreen",
          "deeppink",
          "lightpink",
          "magenta",
          "olive",
          "orchid",
        ],
      },
    ],
    labels: tags,
  };
  return (
    <div className="flex m-auto space-x-4 space-y-5 items-center justify-center mx-auto shadow-lg  sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div style={{ height: "40%", width: "40%" }} className="p-10" >
        <Doughnut data={data} />
      </div>
      <div className="bg-cyan-100 p-10">
        <h1 className="font-extrabold text-cyan-900 text-3xl">Codforces Profile</h1>
        <div className="font-bold"> 
        <h3>MaxRank: {maxRank}</h3>
        <h4>MaxRating: {maxRating}</h4>

        </div>
      </div>
    </div>
  );
}

export default CodingProfile;
export const chartLoader = async () => {
  const response = await fetch(
    "https://codeforces.com/api/user.status?handle=shriganesh83&from=1&count=1000"
  );

  return response.json();
};
