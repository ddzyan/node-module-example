const autocannon = require("autocannon");

autocannon(
  {
    title: "埋点上报压力测试",
    url: "http://10.166.36.77:8030/golden/stat",
    method: "POST",
    headers: {
      Referer: "https://page.xiaojukeji.com/",
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
      "_e=OMGH5PageView&attrs=%7B%22stm_level%22%3A1%2C%22stm_source_social_id_key%22%3A%2247746fe1-a5df-4897-9417-e8bc0e7e492c%22%2C%22stm_social_id_key%22%3A%2247746fe1-a5df-4897-9417-e8bc0e7e492c%22%2C%22stm_social_id%22%3A%22df780b60-9d01-4b2b-ab0c-b31ee0def245%22%2C%22r%22%3A%22https%3A%2F%2Fpage.xiaojukeji.com%2Fmarket%2Fhello_test.html%23%2Fmain%22%2C%22c%22%3A1%2C%22pt%22%3A%22%E3%80%90%E6%A8%A1%E6%9D%BF%E3%80%91%E9%80%9A%E7%94%A8%E5%A4%A7%E8%BD%AC%E7%9B%98-%E8%B8%8F%E6%98%A5%E4%B8%BB%E9%A2%98%22%2C%22upr%22%3A%22https%3A%22%2C%22uho%22%3A%22page.xiaojukeji.com%22%2C%22upa%22%3A%22%2Fmarket%2Fhello_test.html%22%2C%22uha%22%3A%22%23%2Fmain%22%2C%22sw%22%3A1792%2C%22sh%22%3A376%2C%22cd%22%3A%2230-bit%22%2C%22t_dns%22%3A0%2C%22t_tcp%22%3A0%2C%22t_rq%22%3A40%2C%22t_trans%22%3A28%2C%22t_psdm%22%3A553%2C%22t_res%22%3A1559%2C%22t_fb%22%3A59%2C%22t_fp%22%3A87%2C%22t_di%22%3A640%2C%22t_dmrd%22%3A642%2C%22t_pgrd%22%3A2201%2C%22t_dcl%22%3A642%2C%22t_dc%22%3A2200%2C%22t_omgld%22%3A84%2C%22t_ld%22%3A2202%2C%22m_used%22%3A36530044%2C%22m_total%22%3A47080020%2C%22m_limit%22%3A4294705152%2C%22channel%22%3A%22default%22%2C%22businessLine%22%3A%229%22%2C%22ch%22%3A%22default%22%2C%22_act%22%3A%22xingyun%22%2C%22_activity_id%22%3A%22%2Fmarket%2Fhello_test%22%2C%22_activity_name%22%3A%22%E3%80%90%E6%A8%A1%E6%9D%BF%E3%80%91%E9%80%9A%E7%94%A8%E5%A4%A7%E8%BD%AC%E7%9B%98-%E8%B8%8F%E6%98%A5%E4%B8%BB%E9%A2%98%22%2C%22jv%22%3A%222.2.5%22%2C%22uwid%22%3A%221f88a7c2-f207-4504-a70f-4475a993cba5%22%2C%22seq%22%3A1%7D&e=OMGH5PageView&ts=1622019790601&uwid=1f88a7c2-f207-4504-a70f-4475a993cba5&an=Others&oid=df780b60-9d01-4b2b-ab0c-b31ee0def245&v=https%3A%2F%2Fpage.xiaojukeji.com%2Fmarket%2Fhello_test.html%23%2Fmain&ua=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F90.0.4430.93%20Safari%2F537.36%20Edg%2F90.0.818.56&ot=Mac%20OS&ov=10.15.7&ak=omegad6b5832cfb&uo=480&fr=h5&seq=1&fp=df780b60-9d01-4b2b-ab0c-b31ee0def245&ch=default&pn=daijia_tracker&r=",
    connections: 10, // 并发连接数
    pipelining: 5, // 每个连接的管道请求数量
    duration: 60, // 持续时间
    workers: 20 // 用于发送请求的客户端数量
  },
  console.log // 结果输出到控制台
);
