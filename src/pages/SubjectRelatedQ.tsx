import { useState, useEffect } from "react";

import { storage } from "../config/config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

import "./SubjectRelatedQ.css";
import { FaDownload, FaEye } from "react-icons/fa";
import Loading from "./Loading";

interface Props {
  course: string;
  filepath: string;
  courseQ?: any;
}

export default function SubjectRelatedQ({ course, filepath, courseQ }: Props) {
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const [filename, setFilename] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [nothing, setNothing] = useState(false);

  useEffect(() => {
    const imageRef = ref(storage, filepath);

    listAll(imageRef).then((res) => {
      const previewLinks: Promise<string>[] = [];
      const filenames: string[] = [];

      //gs://questionbankbotany.appspot.com

      if (res.items.length === 0) {
        setNothing(true);
      }
      res.items.forEach((itemRef) => {
        previewLinks.push(getDownloadURL(itemRef));

        filenames.push(itemRef.name);
      });

      Promise.all(previewLinks).then((urls) => {
        setImageUrl(urls);

        setFilename(filenames);
        setLoading(false);
      });
    });
  }, []);

  return (
    <div className="subjectRelatedQ">
      <h3 className="courseName">{course}</h3>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="questionList">
          {imageUrl &&
            imageUrl.map((url, index) => {
              return (
                <div key={index} className="eachQuestion">
                  <h4 className="filename">{filename[index]}</h4>
                  <a href={url} className="preview" target="_blank">
                    <FaEye />
                  </a>
                  <a
                    className="download"
                    href={courseQ[index].url}
                    download={filename[index]}
                  >
                    <FaDownload />
                  </a>
                </div>
              );
            })}
          {nothing ? (
            <div className="nothing">
              <h5>NO DATA FOUND!</h5>
              <p>
                <a href="https://wa.me/+8801645179019" target="_blank">
                  Contact me
                </a>{" "}
                to add question papers to the site.
              </p>
              <img src="/images/nothingFound.png" alt="Nothing Found" />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
