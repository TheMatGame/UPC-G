#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float time;
uniform float speed = 30;

void main()
{	
	int frame = int(time*speed)%48;
	int xCo = frame%8;
	int yCo = 5-(frame/8)%6;

    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(normalize(normalMatrix * normal).z);
    vtexCoord = vec2((texCoord.x+xCo)/8, (texCoord.y+yCo)/6);
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
