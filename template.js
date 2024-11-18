module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Upload Image</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .container {
      background: #ffffff;
      padding: 30px 50px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    .container h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
    }

    .container p {
      font-size: 16px;
      color: #666;
      margin-bottom: 15px;
    }

    .container input[type="file"] {
      margin-bottom: 20px;
    }

    .container input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .container input[type="submit"]:hover {
      background-color: #45a049;
    }

    .container input[type="file"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
      max-width: 300px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Upload and Submit Image</h1>
    <p>Select an image file to upload and submit:</p>
    <form action="/submit" method="post" enctype="multipart/form-data">
      <input type="file" name="attachment" accept="image/*">
      <br>
      <input type="submit" value="Submit">
    </form>
  </div>
</body>
</html>
`;