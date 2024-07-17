import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const pathToMedia = (req.query.media.slice(1) as string[]).join("/");
  if (pathToMedia == "") {
    res.status(404).send({ message: "404 not found" });
    return;
  }

  console.log(pathToMedia);
  try {
    const { data, headers } = await axios.get(
      `${process.env.WP_URL}/wp-content/uploads/${pathToMedia}`,
      { responseType: "arraybuffer" }
    );
    res.setHeader('Content-Type', headers['content-type']);
    res.setHeader('Content-Length', headers['content-length'])
    // console.log(headers);
    res.send(data);
    return
  } catch (error) {
    if (error.response.status == 404) {
      res.status(404).send({ message: "404 not found" });
    }
    res.status(500).send({ message: "internal server error" });
    // console.log(error)
    // res.send({ message: pathToMedia });
  }
}
