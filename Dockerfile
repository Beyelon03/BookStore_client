FROM ubuntu:latest
LABEL authors="beyel"

ENTRYPOINT ["top", "-b"]