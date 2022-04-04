import React from "react";
import "../styles/QandA.css";

const QandA = () => {
  return (
    <div className="qanda">
      <h3>Contex API</h3>
      <p>
        কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট স্ট্রাকচার যা আমাদের কে একটা
        (components) থেকে অন্য components এ ডাটা পাস করতে সাহায্য করে। যাতে
        আমাদেরকে প্রপ-ড্রিলিং ব্যবহার করা না লাগে। এতে একবার হুক লিখলেই যেকোনো
        components থেকে ডাটা access করা যায়।
      </p>
      <h3>Semantice Tag</h3>
      <p>
        <b>Semantic</b> HTML এর Elements যা মানুষ ও মেশিন কে পডতে সহযোগীতা করে।
        এই ট্যাগ এর কারনে মেশিন বুজতে পারে যে কোন ট্যাগ টির কি কাজ এবং ট্যাগ টি
        লোথায় আছে। আবার এই SEO তে অনেক বেশি সহযোগীতা করে।যেমন (header , footer
        এবং article) সবকটি <b>semantic tag</b> বলে বিবেচিত হয় কারণ তারা
        উপাদানটির উদ্দেশ্য এবং তাদের ভিতরে থাকা বিষয়বস্তুর ধরন সঠিকভাবে বর্ণনা
        করে.
      </p>
      <h3>Defernce Between inline and block Elements</h3>
      <p>
        একটি ব্লক ইলেমেন্ট নতুন লাইন দিএ শুরু হয়। আর ব্রাউজার এর পুরা যায়গা নেয়।
        ব্লক ইলেমেন্ট নিজে থেকে (full width)নিয়ে রাখে। (margin, padding, width,
        hight border,) এই স্টাইল গুলা এক্সেপ্ট করে। ব্লক ইলেমেন্ট হল এক ধরনের
        ব্লক যেখানে একটি লাইনে অনেকগুলি উপাদান থাকে। <br /> <br /> আর একটি
        ইনলাইন ইলেমেন্ট নতুন লাইন দিয়ে শুরু হয়না। তার যতটুক যায়গা দরকার হয় তাই
        নেয়। ইনলাইন ইলেমেন্ট নিজে থেকে (margin, padding, width ) সেট করে না।(
        border, padding) এই স্টাইল গুলা এক্সেপ্ট করে. যদিও ইনলাইন ইলেমেন্ট একটি
        সম্পূর্ণ লাইনের স্থান নেয়.
      </p>
    </div>
  );
};

export default QandA;
