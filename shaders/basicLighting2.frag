#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec3 Normal;

void main()
{
    fragColor = frontColor * Normal.z;
}
