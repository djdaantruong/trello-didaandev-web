---
title: Docker phát minh quan trọng nhất của ngành phần mềm trong 10 năm qua?
date: 2020-10-30 20:00:44
tags:
---
## Những hiểu lầm về Docker

- So sánh với Virtual Machine
- Tên gọi docker (tên cty và tên phần mềm, không phải tên công nghệ)
- Docker 1 mình sáng tạo ra container (open source)

## Lịch sử Container

- 1979 - Chroot - Unix 1979
- 2002 - Linux namespaces - Al Viro
- 2004 - UnionFS - Erez Zadok - Stony Brook University
- 2007 - Cgroups - Google
- 2013 - Docker

## Container runtime (phần quan trọng nhất trong docker)

- runC
- contained
- Docker (tài liệu nhiều, công động lớn)
- rkt
- CRI-O
- LXC
- Kata
- gVisor
- podman

## Container hoạt động như thế nào?

## Dùng container ở đâu ?

- Đóng gói những ứng dụng chạy được trên nhiều nền tảng khác nhau (Web, API, TCP/IP)
- Cho phép phát hành ứng dụng theo phiên bản rõ ràng
- Tăng tốc làm việc cả đội dự án (Đồng nhất môi trường làm việc: Dev - Staging - Production, Cấu hình sẵn giúp triển khai nhẹ nhàng, Tự động hoá kiểm thử triển khai)
- Scale up năng lực phục vụ dễ dàng (mua nhiểu server nhỏ, dùng tới đâu mua thêm)
- Tăng cường bảo mật nhờ sự cô lập ứng dụng
- Playground (sân chơi phá phách mọi thứ, tìm hiểu học thì cài lên container tha hồ nghiên cứu)

## Tại sao Docker phổ biến ?

- Lightweight: nhẹ
- Portable: khả năng linh động, chạy nhiều nơi
- Fast: nhanh
- No hypervisor: không giải pháp ảo hoá cầu nối, phiền, nhiều hạn chế tài nguyên

## Tại sao bạn nên học Docker càng sớm càng tốt ?

- 25% cty sử dụng nhưng tiềm năng nó lớn (tăng 75%) - cần nhiều nguồn nhân lực biết dùng Docker, cải thiện đời sống lập trình, nên học càng sớm càng tốt

## Bạn sẽ ước mình biết những điều này về Docker sớm hơn ?

- Sử dụng docker-compose (giúp gõ lệnh tiện hơn, 1 lệnh cho tất cả)
- Hạn chế user root trong Dockerfile
- Tối ưu layer trong Dockerfile (RUN-COPY-ADD)
- Sử dụng multi-stage build giúp image nhỏ hơn
- Entrypoint và CMD

## Coi youtube Docker tutorial để học và làm theo